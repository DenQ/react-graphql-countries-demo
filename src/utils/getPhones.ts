import { Collection } from "../Interfaces/BaseTypes";

export default (phone: string | null): Collection[] => {
  return phone.split(',').map((item: string) => {
    return {
      code: item,
      name: item
    };
  });
}
