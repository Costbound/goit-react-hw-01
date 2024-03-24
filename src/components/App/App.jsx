import css from './App.module.css'
import Profile from '../Profile/Profile'
import userData from '../../userData.json'


export default function App() {
    const { username, tag, location, avatar, stats } = userData
    return (
        <>
            <Profile
                name={username}
                tag={tag}
                location={location}
                avatar={avatar}
                stats={stats}
            />
        </>
    )
}