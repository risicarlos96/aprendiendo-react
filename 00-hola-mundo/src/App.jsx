import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'risicarlos',
    name: 'Carlos Ruiz',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'giraldeo',
    name: 'Antonio Giraldo',
    isFollowing: false
  },
  {
    userName: 'pedro',
    name: 'Pedro Picapiedra',
    isFollowing: true
  }
];

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard 
              key={userName}
              userName={userName} 
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        )
      }
    </section>   
  )
}