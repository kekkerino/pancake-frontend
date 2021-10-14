import { gql } from 'graphql-request'

const lastPairHourIdQuery = gql`
  query lastPairHourIdQuery($pairId: String) {
    pairHourDatas(first: 1, where: { pair: $pairId }) {
      id
    }
  }
`
export default lastPairHourIdQuery