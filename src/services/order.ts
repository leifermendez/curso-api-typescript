import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const getOrders = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

export { getOrders };
