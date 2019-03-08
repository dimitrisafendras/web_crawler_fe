export const getFr = value => typeof value === 'number' ? `repeat(${value}, 1fr)` : value;
export const formatAreas = areas => areas && areas.map(area => `"${area}"`).join(" ");