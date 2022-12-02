import './App.css';
import HeaderBanner from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Project from './components/Project/Project';

import { UnrealProjects } from './Data/UnrealProjectData';
import { UnityProjects } from './Data/UnityProjectData';

function App() {
	return (
		<div className="App">
			<HeaderBanner/>
			<div className='BodyContainer'>
				<h1 className='Heading'>Player Profile</h1>
				<Profile />
				<h1 className='Heading'>Unreal Projects</h1>
				{UnrealProjects.map((project) => (
					<Project key={project.number} {...project} />
				))}
				<h1 className='Heading'>Unity Projects</h1>
				{UnityProjects.map((project) => (
					<Project key={project.number} {...project} />
				))}
				<h1 className='Contacts'>Unity Projects</h1>
						
			</div>
		</div>
	);
}

export default App;
