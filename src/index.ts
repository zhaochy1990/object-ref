import { debug } from 'debug';

const log = debug('ObjectRef');

export class ObjectRef {
  static parse(object: any) {
    log('parse object %j', object);

  }
}
