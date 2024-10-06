import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';

import Home from './Components/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Register';
import Logout from './Components/Logout/Logout';
import TeacherDashboard from './Components/Pages/TeacherDashboard';
import StudentDashboard from './Components/Pages/StudentDashboard';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
