import { NextResponse } from 'next/server';

// Revalidate every 6 hours (21600 seconds) to cache the exchange rate
export const revalidate = 21600;

export async function GET() {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (!response.ok) {
      throw new Error(`Failed to fetch exchange rates: ${response.status}`);
    }
    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      rate: data.rates.TRY, // Current USD to TRY rate
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Exchange rate fetch error:', error);
    // Fallback to a hardcoded rate if the API fails
    return NextResponse.json({
      success: false,
      rate: 35.0, // Fallback rate
      updatedAt: new Date().toISOString()
    });
  }
}
