import {AddressAdd} from "../../Shared/Models/AddressAdd";

export interface CustomerAdd {
  name: string;
  surname: string;
  password: string;
  email: string;
  phoneNumber: string;
  address: AddressAdd;
}

