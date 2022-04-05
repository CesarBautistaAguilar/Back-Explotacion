import HealthService from '../service/Health.Service'

const healthCheck = async (req, res) => {
  console.log('method healthCheck Controller started')
  const result = HealthService.healthCheck
  console.log(`result => ${JSON.stringify(result)}`)
  console.log('method healthCheck Controller ending')
  res.json(result)
}
export const HelloController = {
  healthCheck,
}

export default null
