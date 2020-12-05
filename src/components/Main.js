import Dashboard from './Dashboard'
import StockStats from './StockStats'
import './Main.css'

function Main() {
    return (
      <div className="Main">
          <div className="Main-container">
            <Dashboard />
            <StockStats />
          </div>
      </div>
    );
}
  
export default Main;