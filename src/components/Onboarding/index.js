/* Code generated with AutoHTML Plugin for Figma */
import "./index.css";
import { useNavigate } from 'react-router-dom';
export const Onboarding = ({ className, ...props }) => {
   const navigate = useNavigate();
  return (
    <div class="onboarding">
  <svg
    class="background-shape"
    width="375"
    height="486"
    viewBox="0 0 375 486"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M458.252 75.3997C201.239 203.907 -87.5984 78.6779 -199.891 0C-407.495 181.943 -698.14 512.882 -199.891 381.096C298.359 249.311 530.283 396.121 583.965 486C649.149 295.589 715.264 -53.1076 458.252 75.3997Z"
      fill="#FDCCC5"
    />
  </svg>

  <div class="onboarding2">
    <div class="content">
      <div class="logo">MeTime</div>
      <img
        alt='sds'
        class="young-woman-meditating-in-nature-surrounded-by-butterflies"
        src="/assets/young-woman.png"
      />
      <div class="title-text">
        <div class="title">Welcome to <br />The Gallery Salon!</div>
        <div class="text">
          Follow the steps to schedule your next appointment with us.
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="button">
        <div class="skip">Skip</div>
      </div>
      <div class="button2">
        <div class="start" style={{cursor: 'pointer'}} onClick={()=> navigate('/choose-service')}>
            Start
          </div>
      </div>
    </div>
  </div>
</div>

  );
};
