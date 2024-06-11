import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import PageNotFound from './pages/PageNotFound';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
	// Add Job
	const addJob = async (newJob) => {
		const res = await fetch('/api/jobs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newJob),
		});
		return;
	};

	// Update Job
	const updateJob = async (job) => {
		const res = await fetch(`/api/jobs/${job.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(job),
		});
		return;
	};

	// Delete Job
	const deleteJob = async (id) => {
		const res = await fetch(`/api/jobs/${id}`, {
			method: 'DELETE',
		});
		return;
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/jobs' element={<JobsPage />} />
				<Route
					path='/add-job'
					element={<AddJobPage addNewJob={addJob} />}
				/>
				<Route
					path='/edit-job/:id'
					element={<EditJobPage editJob={updateJob} />}
					loader={jobLoader}
				/>
				<Route
					path='/jobs/:id'
					element={<JobPage deleteJob={deleteJob} />}
					loader={jobLoader}
				/>
				<Route path='*' element={<PageNotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
