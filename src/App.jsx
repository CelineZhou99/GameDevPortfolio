import "./App.css";
import HeaderBanner from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

import { CppProjects } from "./data/CppProjectData";
import { UnrealProjects } from "./data/UnrealProjectData";
import { UnityProjects } from "./data/UnityProjectData";
import { Contacts } from "./data/ContactsData";

function App() {
	return (
		<div className="App">
			<HeaderBanner />
			<div className="BodyContainer">
				<div className="FillerBox">
					<a id="Profile_ID" />
				</div>
				<h1 className="Heading">Player Profile</h1>
				<Profile />
				<a id="Cpp_ID" className="HeadingLink">
					<h1 className="Heading">Pure C++ Projects (Solo)</h1>
				</a>
				{CppProjects.map((project) => (
					<Project key={project.title} {...project} />
				))}
				<a id="Unreal_ID" className="HeadingLink">
					<h1 className="Heading">Unreal Projects (Solo)</h1>
				</a>
				{UnrealProjects.map((project) => (
					<Project key={project.title} {...project} />
				))}
				<a id="Unity_ID" className="HeadingLink">
					<h1 className="Heading">Unity Projects (Solo)</h1>
				</a>
				{UnityProjects.map((project) => (
					<Project key={project.title} {...project} />
				))}
			</div>
			<Footer {...Contacts} />
		</div>
	);
}

export default App;
