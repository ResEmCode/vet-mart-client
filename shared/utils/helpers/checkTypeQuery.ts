export const checkTypeQuery = <T>(query: any): query is T => {
  return typeof query === "string";
}
