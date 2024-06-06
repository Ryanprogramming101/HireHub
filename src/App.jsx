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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path='/jobs' element={<JobsPage />} />
			<Route path='*' element={<PageNotFound />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
