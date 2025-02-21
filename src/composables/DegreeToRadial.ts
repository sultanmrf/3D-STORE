export function useDegreeToRadial(deg: number) {
  const calculateDegreeToRadial: number = deg * (Math.PI / 180)
  return { calculateDegreeToRadial }
}
