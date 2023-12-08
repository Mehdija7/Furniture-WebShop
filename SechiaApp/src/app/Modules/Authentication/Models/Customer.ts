import {Address} from "../../Shared/Models/Address";

export interface Customer {
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  address: Address
}
