export function BagIcon() {
  return (
    <svg
      fill="#000000"
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M27 4.96h-5.975v-1.918c0-1.655-1.346-3-3-3h-3.989c-1.655 0-3 1.345-3 3v1.918h-6.037c-1.104 0-2 0.896-2 2v22.999c0 1.105 0.896 2 2 2h22c1.105 0 2-0.895 2-2v-22.999c0-1.104-0.895-2-2-2h0zM13.037 3.042c0-0.552 0.448-1 1-1h3.989c0.552 0 1 0.448 1 1v1.918h-5.989v-1.918zM27 29.959h-22v-22.999h6.037v2.058s-0.027 0.999 0.994 0.999c1.125 0 1.006-0.999 1.006-0.999v-2.058h5.989v2.058s-0.067 1.004 0.996 1.004c1 0 1.004-1.004 1.004-1.004v-2.058h5.974v22.999z"></path>
    </svg>
  );
}

export function LoaderIcon({ className = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      height="4rem"
      width="4rem"
      fill="#000"
      className={className}
    >
      <g>
        <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
      </g>
    </svg>
  );
}

export function PersonIcon() {
  return (
    <svg
      fill="#000000"
      width="28px"
      height="28px"
      viewBox="-3 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      className="cf-icon-svg"
    >
      <path d="M12.517 12.834v1.9a1.27 1.27 0 0 1-1.267 1.267h-9.5a1.27 1.27 0 0 1-1.267-1.267v-1.9A3.176 3.176 0 0 1 3.65 9.667h5.7a3.176 3.176 0 0 1 3.167 3.167zM3.264 5.48A3.236 3.236 0 1 1 6.5 8.717a3.236 3.236 0 0 1-3.236-3.236z" />
    </svg>
  );
}

export function PickerColorIcon() {
  return (
    <svg
      fill="#000000"
      width="28px"
      height="28px"
      viewBox="0 0 36 36"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>color-picker-solid</title>
      <path
        d="M33.73,2.11a4.09,4.09,0,0,0-5.76.1L22.81,7.38a3.13,3.13,0,0,1-4.3.11L17.09,8.91,27,18.79l1.42-1.42A3.18,3.18,0,0,1,28.46,13l5.17-5.17A4.08,4.08,0,0,0,33.73,2.11Z"
        className="clr-i-solid clr-i-solid-path-1"
      ></path>
      <path
        d="M22.18,16.79,7.46,31.51a2,2,0,1,1-2.82-2.83L19.35,14l-1.41-1.41L3.22,27.27a4,4,0,0,0-.68,4.8L1.06,33.55a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l1.44-1.44a3.93,3.93,0,0,0,2.09.6,4.06,4.06,0,0,0,2.88-1.2L23.6,18.21Z"
        className="clr-i-solid clr-i-solid-path-2"
      ></path>
      <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
    </svg>
  );
}

export function SuccessIcon() {
  return (
    <svg
      width="36px"
      height="36px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z"
        fill="#323232"
      />
    </svg>
  );
}

export function FailIcon() {
  return (
    <svg
      width="36px"
      height="36px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13ZM13 15.9888C13 15.4365 12.5523 14.9888 12 14.9888C11.4477 14.9888 11 15.4365 11 15.9888V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V15.9888ZM9.37735 4.66136C10.5204 2.60393 13.4793 2.60393 14.6223 4.66136L21.2233 16.5431C22.3341 18.5427 20.8882 21 18.6008 21H5.39885C3.11139 21 1.66549 18.5427 2.77637 16.5431L9.37735 4.66136Z"
        fill="#323232"
      />
    </svg>
  );
}

export function SittingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 opacity-75"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

export function OnePersonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 opacity-75"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

export function CategoryIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
        stroke="#292D32"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.34"
        d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
        stroke="#292D32"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.34"
        d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function GoogleIcon() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="-0.5 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Google-color</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Color-" transform="translate(-401.000000, -860.000000)">
          <g id="Google" transform="translate(401.000000, 860.000000)">
            <path
              d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
              id="Fill-1"
              fill="#FBBC05"
            ></path>
            <path
              d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
              id="Fill-2"
              fill="#EB4335"
            ></path>
            <path
              d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
              id="Fill-3"
              fill="#34A853"
            ></path>
            <path
              d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
              id="Fill-4"
              fill="#4285F4"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Facebook-color</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Color-"
          transform="translate(-200.000000, -160.000000)"
          fill="#4460A0"
        >
          <path
            d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
            id="Facebook"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export function AddIcon() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Edit / Add_To_Queue">
        <path
          id="Vector"
          d="M3 9V19.4C3 19.9601 3 20.2399 3.10899 20.4538C3.20487 20.642 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.0395 21 4.59846 21H15.0001M14 13V10M14 10V7M14 10H11M14 10H17M7 13.8002V6.2002C7 5.08009 7 4.51962 7.21799 4.0918C7.40973 3.71547 7.71547 3.40973 8.0918 3.21799C8.51962 3 9.08009 3 10.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07969 21.0002 6.19978L21.0002 13.7998C21.0002 14.9199 21.0002 15.48 20.7822 15.9078C20.5905 16.2841 20.2842 16.5905 19.9079 16.7822C19.4805 17 18.9215 17 17.8036 17H10.1969C9.07899 17 8.5192 17 8.0918 16.7822C7.71547 16.5905 7.40973 16.2842 7.21799 15.9079C7 15.4801 7 14.9203 7 13.8002Z"
          stroke="#000000"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}

export function UpdateIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z"
        fill="#000000"
      />
    </svg>
  );
}

export function OrderIcon() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="4"
        width="14"
        height="17"
        rx="2"
        stroke="#33363F"
        strokeWidth="2"
      />
      <path
        d="M9 9H15"
        stroke="#33363F"
        strokeWidth="2"
        stroke-linecap="round"
      />
      <path
        d="M9 13H15"
        stroke="#33363F"
        strokeWidth="2"
        stroke-linecap="round"
      />
      <path
        d="M9 17H13"
        stroke="#33363F"
        strokeWidth="2"
        stroke-linecap="round"
      />
    </svg>
  );
}

export function LogoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 opacity-75"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
}

export function DetailIcon() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 1024 1024"
      className="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M338.358857 510.317714a124.635429 124.635429 0 0 0-115.2 95.085715c-2.779429 11.044571-15.067429 15.798857-25.746286 14.116571-11.629714-1.828571-17.554286-17.188571-13.165714-30.354286 15.579429-47.616 47.323429-84.114286 88.795429-103.862857a112.932571 112.932571 0 0 1 70.948571-200.996571c62.464 0 113.152 50.761143 113.152 113.078857 0 34.523429-15.579429 65.462857-40.009143 86.308571 42.715429 19.090286 75.190857 56.027429 92.672 103.643429 4.827429 13.165714 1.682286 26.258286-9.289143 32.182857a23.332571 23.332571 0 0 1-30.500571-16.091429c-14.628571-56.173714-59.977143-91.209143-117.394286-93.257142a114.029714 114.029714 0 0 1-14.262857 0.146285z m586.313143 134.070857V537.453714c0-16.384 15.067429-29.403429 32.548571-29.403428a29.257143 29.257143 0 0 1 30.208 29.403428v133.193143a109.714286 109.714286 0 0 1-109.714285 109.714286H172.690286c-75.044571 0-136.118857-55.588571-136.118857-124.342857V170.569143A109.714286 109.714286 0 0 1 146.285714 60.854857L851.236571 60.708571c75.117714 0 136.192 55.588571 136.192 124.416l-0.146285 213.577143c-0.512 15.872-13.165714 27.282286-30.061715 27.282286-17.042286 0-31.963429-11.410286-32.548571-27.428571l-0.219429-213.430858c0-36.132571-32.914286-61.366857-73.142857-61.366857H172.617143a73.142857 73.142857 0 0 0-73.142857 73.142857V656.091429c0 36.059429 32.914286 61.513143 73.142857 61.513142h678.838857a73.142857 73.142857 0 0 0 73.142857-73.142857zM344.064 333.750857a63.707429 63.707429 0 0 0 0 127.268572 63.707429 63.707429 0 0 0 0-127.268572z m440.32 283.209143H618.057143c-19.529143 0-35.84-12.434286-35.84-28.525714s16.310857-28.452571 35.84-28.452572h166.180571c19.602286 0 35.84 12.361143 35.84 28.525715 0 16.091429-16.310857 28.452571-35.84 28.452571z m0-275.748571H618.057143c-19.529143 0-35.84-12.361143-35.84-28.452572s16.310857-28.452571 35.84-28.452571h166.180571c19.602286 0 35.84 12.361143 35.84 28.525714 0 16.091429-16.310857 28.379429-35.84 28.379429z m0 126.537142H618.057143c-19.529143 0-35.84-12.288-35.84-28.452571 0-16.091429 16.310857-28.452571 35.84-28.452571h166.180571c19.529143 0 35.84 12.361143 35.84 28.525714 0 16.091429-16.237714 28.379429-35.84 28.379428z"
        fill="#000000"
      />
    </svg>
  );
}

export function ModelIcon() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 5H15V9H19V19H9V15H5V5ZM7 7H13V9H9V13H7V7ZM11 17H17V11H15V15H11V17ZM13 11H11V13H13V11Z"
        fill="#000000"
      />
    </svg>
  );
}