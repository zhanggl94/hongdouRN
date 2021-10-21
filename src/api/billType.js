import axios from '../request/axios'
import baseUrl from './baseUrl'

const billType = {
    select: params => axios.get(baseUrl.billType.select, { params }),
    delete: params => axios.delete(baseUrl.billType.delete, { data: params }),
}
export default billType