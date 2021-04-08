import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_DATA = gql`
  query getData {
    launchesPast(limit: 10) {
      ships {
        id
        image
        home_port
      }

      mission_id
      mission_name

      rocket {
        first_stage {
          cores {
            core {
              id
              status
            }
          }
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.launchesPast.map((l) => (
          <div key={l.mission_id}>{l.mission_name}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
