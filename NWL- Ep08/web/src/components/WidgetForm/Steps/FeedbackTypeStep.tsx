import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void

}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
          <span className="text-xl leading-8 ">Deixe seu feedback</span>
          <CloseButton />
        </header>
      
      <div className="flex py-6 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-500 text-black font-medium rounded-lg py-2 px-2 w-20 flex-1 flex flex-col items-center border-2 border-transparent hover:animate-twinkle focus:animate-twinkle focus:outline-none "
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt}/>
              <span>{value.title}</span>
            </button>
          )
        }) }
      </div>
    </>
  )
}