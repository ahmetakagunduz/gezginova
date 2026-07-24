// GezgiNova - localStorage Yardımcıları

const KEYS = {
  USER: 'gezginova_user',
  TRIPS: 'gezginova_trips',
  GUEST: 'gezginova_guest',
};

// Kullanıcı
export function saveUser(user) {
  localStorage.setItem(KEYS.USER, JSON.stringify(user));
}

export function getUser() {
  const data = localStorage.getItem(KEYS.USER);
  return data ? JSON.parse(data) : null;
}

export function removeUser() {
  localStorage.removeItem(KEYS.USER);
}

// Seyahatler
export function saveTrips(trips) {
  const user = getUser();
  if (user) {
    localStorage.setItem(`${KEYS.TRIPS}_${user.id}`, JSON.stringify(trips));
  } else {
    sessionStorage.setItem(KEYS.GUEST, JSON.stringify(trips));
  }
}

export function getTrips() {
  const user = getUser();
  if (user) {
    const data = localStorage.getItem(`${KEYS.TRIPS}_${user.id}`);
    return data ? JSON.parse(data) : [];
  }
  const guestData = sessionStorage.getItem(KEYS.GUEST);
  return guestData ? JSON.parse(guestData) : [];
}

export function isGuest() {
  return !getUser();
}

export function clearGuestData() {
  sessionStorage.removeItem(KEYS.GUEST);
}

// Tüm kayıtlı kullanıcıları getir (auth amaçlı)
export function getAllUsers() {
  const data = localStorage.getItem('gezginova_all_users');
  return data ? JSON.parse(data) : [];
}

export function saveAllUsers(users) {
  localStorage.setItem('gezginova_all_users', JSON.stringify(users));
}
