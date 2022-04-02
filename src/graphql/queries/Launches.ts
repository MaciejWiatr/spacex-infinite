import { gql } from 'graphql-request'

export const GET_LAUNCHES_QUERY = gql`
  query GetLaunches($limit: Int, $offset: Int, $search: String) {
    launchesPast(
      limit: $limit
      offset: $offset
      find: { mission_name: $search }
    ) {
      id
      mission_name
      details
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        flickr_images
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
    }
  }
`

export const GET_LAUNCH_DETIALS_QUERY = gql`
  query GetLaunch($launchId: ID!) {
    launch(id: $launchId) {
      rocket {
        rocket_name
        rocket_type
      }
      mission_name
      launch_success
      links {
        flickr_images
        article_link
      }
      details
    }
  }
`
