import { gql } from 'graphql-request'

export const LAUNCHES_QUERY = gql`
  query GetLaunches($limit: Int, $offset: Int, $search: String) {
    launchesPast(
      limit: $limit
      offset: $offset
      find: { mission_name: $search }
    ) {
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
