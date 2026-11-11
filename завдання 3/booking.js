import { rooms } from "./rooms.js";

export function getAvailableRooms() {
  return rooms.filter((room) => room.available);
}

export function findRoom(id) {
  return rooms.find((room) => room.id === id);
}

export function bookRoom(id, nights) {
  const room = findRoom(id);

  if (!room) {
    console.log("Номер не знайдено");
    return;
  }

  if (!room.available) {
    console.log("Номер недоступний");
    return;
  }

  let cost = room.price * nights;

  if (nights >= 5) {
    cost = cost - cost * 0.15;
  }

  room.available = false;
  console.log(cost + " грн");
}
