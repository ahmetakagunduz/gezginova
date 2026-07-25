import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { getServerSession } from 'next-auth';

export async function GET(req) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 });
    }

    const trips = await prisma.trip.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ trips });
  } catch (error) {
    console.error('Trip get error:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 });
    }

    const data = await req.json();

    const trip = await prisma.trip.create({
      data: {
        userId: session.user.id,
        countryId: data.countryId,
        countryName: data.countryName,
        departureCity: data.departureCity || 'IST',
        days: data.days || 7,
        budgetLevel: data.budgetLevel || 'orta',
        visaPreference: data.visaPreference || 'hepsi',
        totalCost: data.totalCost || 0,
        flightCost: data.flightCost || 0,
        accommodationCost: data.accommodationCost || 0,
        dailyCost: data.dailyCost || 0,
        visaCost: data.visaCost || 0
      }
    });

    return NextResponse.json({ trip }, { status: 201 });
  } catch (error) {
    console.error('Trip create error:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Yetkisiz' }, { status: 401 });
    }

    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Trip ID gerekli' }, { status: 400 });
    }

    const trip = await prisma.trip.findUnique({ where: { id } });
    if (!trip) {
      return NextResponse.json({ error: 'Trip bulunamadı' }, { status: 404 });
    }
    if (trip.userId !== session.user.id) {
      return NextResponse.json({ error: 'Yetkisiz' }, { status: 403 });
    }

    await prisma.trip.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Trip delete error:', error);
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 });
  }
}
