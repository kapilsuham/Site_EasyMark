import axios from "axios";
const checkPlanAccess = async () => {
    try {
        const response = await axios.get('/api/check-user-plan-access')
        return {data: response.data}
    } catch (error) {
        console.log('error in check-user-plan-access:',error);
        return {data:null,message:'error in check-user-plan-access'}
    }
}
export default checkPlanAccess