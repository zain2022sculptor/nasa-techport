import { formatDate } from '@/utils/date-formatter'

export const getProjectsApi = async (date?: Date) => {
  const dateSevenDaysAgo = new Date()
  dateSevenDaysAgo.setDate(dateSevenDaysAgo.getDate() - 7)
  const formatedDate = formatDate(dateSevenDaysAgo)

  console.log('current date is', dateSevenDaysAgo, formatedDate)
  let URL = `http://nasa-tech-env.eba-fecbzp3j.us-east-1.elasticbeanstalk.com/api/projects?updatedSince=${formatedDate}`
  if (date) {
    console.log('now there is date and the updated date is', date)
    URL = `http://nasa-tech-env.eba-fecbzp3j.us-east-1.elasticbeanstalk.com/api/projects?updatedSince=${date}`
  }
  const response = await fetch(URL, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  console.log('projects in api function are', data.projects)
  return data.projects
}
export const getProjectDetailsApi = async (projectID: string | string[]) => {
  const response = await fetch(
    `http://nasa-tech-env.eba-fecbzp3j.us-east-1.elasticbeanstalk.com/api/projects/${projectID}`,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  const data = await response.json()
  console.log('project details data in api function is', data.project)
  return data.project
}
