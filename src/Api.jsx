export const getVans = async () => {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw new Error("Could not fetch vans!");
  }
  const data = await res.json();
  return data.vans;
};
