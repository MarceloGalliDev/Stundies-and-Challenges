import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-4 w-[280px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 146 146"><title>001-business</title><rect x="0.5" y="0.5" width="145" height="145" fill="none" />
          <path d="M122.55,114.72L115.65,127a0.8,0.8,0,0,1-1.39,0l-6.9-12.27v-0.66h15.2v0.66Z" fill="#fff" /><rect x="107.35" y="34.86" width="15.2" height="9.6" fill="#ed9180" /><path d="M122.55,26.46v8.4h-15.2v-8.4a3.2,3.2,0,0,1,3.2-3.2h8.8A3.2,3.2,0,0,1,122.55,26.46Z" fill="#ed9180" /><rect x="107.35" y="44.46" width="15.2" height="69.6" fill="#ed9180" /><path d="M94.15,50.46h-26a0.8,0.8,0,0,1-.8-0.8v-26Z" fill="#fff" /><path d="M94.55,51.19v71.27a4.8,4.8,0,0,1-4.8,4.8h-68a4.8,4.8,0,0,1-4.8-4.8V28.06a4.8,4.8,0,0,1,4.8-4.8H66.63a0.81,0.81,0,0,1,.56.23l0.17,0.17v26a0.8,0.8,0,0,0,.8.8h26l0.17,0.17A0.81,0.81,0,0,1,94.55,51.19ZM49,66.06a10.8,10.8,0,1,0-10.8,10.8A10.8,10.8,0,0,0,49,66.06Zm0,36.8a10.8,10.8,0,1,0-10.8,10.8A10.8,10.8,0,0,0,49,102.86Z" fill="#fff" /><path d="M38.15,53.26A12.8,12.8,0,1,0,51,66.06,12.81,12.81,0,0,0,38.15,53.26Z" fill="#7bd489" /><path d="M38.15,90.06A12.8,12.8,0,1,0,51,102.86,12.81,12.81,0,0,0,38.15,90.06Z" fill="#7bd489" /><line x1="57.35" y1="62.46" x2="77.35" y2="62.46" fill="none" stroke="#515f76" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.4" /><line x1="57.35" y1="70.46" x2="82.95" y2="70.46" fill="none" stroke="#515f76" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.4" /><line x1="57.35" y1="98.46" x2="77.35" y2="98.46" fill="none" stroke="#515f76" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.4" /><line x1="57.35" y1="106.46" x2="84.55" y2="106.46" fill="none" stroke="#515f76" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.4" /><polyline points="33.35 66.06 37.35 70.06 42.95 63.66" fill="none" stroke="#515f76" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" /><polyline points="33.35 102.86 37.35 106.86 42.95 100.46" fill="none" stroke="#515f76" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" /><rect x="119" y="44" width="4" height="70" fill="#eeb8a9" /><rect x="119" y="35" width="4" height="9" fill="#eeb8a9" /><line x1="122.55" y1="44.46" x2="107.35" y2="44.46" fill="none" stroke="#515f76" stroke-miterlimit="10" stroke-width="2.4" /><path d="M119.35,23h-4A3.84,3.84,0,0,1,119,26.46V35h4V26.46A3.84,3.84,0,0,0,119.35,23Z" fill="#eeb8a9" /><path d="M122.55,114.06v0.66L115.65,127a0.8,0.8,0,0,1-1.39,0l-6.9-12.27V26.46a3.2,3.2,0,0,1,3.2-3.2h8.8a3.2,3.2,0,0,1,3.2,3.2v87.6Z" fill="none" stroke="#515f76" stroke-miterlimit="10" stroke-width="2.4" /><line x1="107.35" y1="34.86" x2="122.55" y2="34.86" fill="none" stroke="#515f76" stroke-miterlimit="10" stroke-width="2.4" /><line x1="122.55" y1="114.06" x2="107.35" y2="114.06" fill="none" stroke="#515f76" stroke-miterlimit="10" stroke-width="2.4" /><path d="M94.15,52a1.11,1.11,0,0,0,0-.69l0-.3h-26C67.71,51,67,50.9,67,50.46v4c0,0.44.71,0.54,1.15,0.54h26l0,0.3" fill="#c3c7cd" /><path d="M94.15,50.46h-26a0.8,0.8,0,0,1-.8-0.8v-26" fill="none" stroke="#515f76" stroke-miterlimit="10" stroke-width="2.4" /><path d="M67.35,23.66l-0.17-.17a0.81,0.81,0,0,0-.56-0.23H21.75a4.8,4.8,0,0,0-4.8,4.8v94.4a4.8,4.8,0,0,0,4.8,4.8h68a4.8,4.8,0,0,0,4.8-4.8V51.19a0.81,0.81,0,0,0-.23-0.56l-0.17-.17Z" fill="none" stroke="#515f76" stroke-miterlimit="10" stroke-width="2.4" /><line x1="123.62" y1="8.32" x2="126.82" y2="11.52" fill="none" stroke="#b8b9ba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6" /><line x1="126.82" y1="8.32" x2="123.62" y2="11.52" fill="none" stroke="#b8b9ba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6" /><circle cx="139.95" cy="15.53" r="2" fill="none" stroke="#b8b9ba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6" /><circle cx="132.55" cy="25.79" r="1.6" fill="#b8b9ba" /><line x1="133" y1="127" x2="133" y2="133" fill="none" stroke="#b8b9ba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /><line x1="136" y1="130" x2="130" y2="130" fill="none" stroke="#b8b9ba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /><path d="M7.15,16.22L9.48,15a0.08,0.08,0,0,1,.12.08L9.15,17.67l2,1.95L8.39,20l-1.24,2.5L5.92,20l-2.6-.38a0.08,0.08,0,0,1,0-.14l1.88-1.84L4.68,14.92Z" fill="#ed9180" /><circle cx="16.55" cy="9.92" r="1.6" fill="#b8b9ba" /><circle cx="122.55" cy="136.88" r="1.6" fill="#b8b9ba" /><circle cx="7.55" cy="29.26" r="2" fill="none" stroke="#b8b9ba" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.6" />
        </svg>

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}