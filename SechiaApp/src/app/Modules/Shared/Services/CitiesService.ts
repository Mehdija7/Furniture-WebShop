import {BaseService} from "../../Base/BaseService";
import {City} from "../Models/City";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CitiesService extends BaseService {

  getCities() {
    return this.get<[City]>('cities')
  }
}
