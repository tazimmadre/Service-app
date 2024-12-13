/* Code generated with AutoHTML Plugin for Figma */
import "./index.css";
import { useNavigate } from 'react-router-dom';

export const Registration = ({ className, ...props }) => {
  const navigate = useNavigate();
  return (
    <div class="main-container">
      <div class="modal-container">
        <div class="registration">
          <div class="btn">
            <div class="button" style={{cursor: 'pointer'}} onClick={()=> navigate('/login')}>Log In</div>
          </div>
          <div class="btn2">
            <div class="button2">Create Account</div>
          </div>
          <div class="text">
            <div class="before-schedule-please-enter-your-account-or-create-one">
              Before schedule, please enter your account or create one!
            </div>
            <div class="hey-there">Hey there!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
