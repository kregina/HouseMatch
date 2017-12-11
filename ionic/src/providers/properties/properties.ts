import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
Generated class for the ImoveisProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class PropertiesProvider {
  private _properties:Property[] = null;

  constructor(public http: HttpClient) {

  }

  ngOnInit() {

  }

  async proximo(indice: number = 0) : Promise<Property> {
    if(!this._properties){
      this._properties = await this.http.get<Property[]>("assets/data/data.json").toPromise();
    }
    return this._properties[indice % (this._properties.length)];
  }

}

export interface Property {
  imagem: string;
  aluguel: string;
  condominio: string;
  caracteristicas: string;
  descricao: string;
  endereco: string;
}
