import { BrowserRouter as Router, Route, Routes as BrowserRoutes } from 'react-router-dom'
import { Characters } from './Pages/Characters'
import { Episodes } from './Pages/Episodes'

export const Routes: React.FC = ({ children }) => {
    return (
        <Router>
            {children}
            <BrowserRoutes>
                <Route path="/characters" element={<Characters />} />
                <Route path="/episodes" element={<Episodes />} />
            </BrowserRoutes>
        </Router>
    )
}
