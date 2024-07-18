export default interface IBaseRepository {
  save(object: any): Promise<any>
  findOneById(id: string): Promise<any>
}
