import Background from "@/registry/components/_ui/background";
import Section from "@/registry/components/_ui/section";
import NavbarStartEnd from "@/registry/components/navs/start-end";
import { ChevronRight } from "lucide-react";

export default function HeroLinear() {
  return (
    <>
      <NavbarStartEnd gradient={false} className="[--nav-height:50px]" />
      <Section.RootElement className="_ui _hero overflow-x-hidden">
        <Section.Container container="8xl" className="overflow-hidden p-8">
          <div className="_header mb-10 pt-15">
            <h1 className="mx-auto max-w-2xl text-center text-balance max-sm:text-4xl">
              AI workflows for modern product teams
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-center">
              Streamline your product development with Linear&apos;s powerful AI
              workflows. Purpose-built to help product teams move faster.
            </p>
          </div>

          <HeroImage />
        </Section.Container>
      </Section.RootElement>
    </>
  );
}

const LoadingIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#62666d"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9408 8.91426L12.9576 8.65557C12.9855 8.4419 13 8.22314 13 8C13 7.77686 12.9855 7.5581 12.9576 7.34443L14.9408 7.08573C14.9799 7.38496 15 7.69013 15 8C15 8.30987 14.9799 8.61504 14.9408 8.91426ZM14.4688 5.32049C14.2328 4.7514 13.9239 4.22019 13.5538 3.73851L11.968 4.95716C12.2328 5.30185 12.4533 5.68119 12.6214 6.08659L14.4688 5.32049ZM12.2615 2.4462L11.0428 4.03204C10.6981 3.76716 10.3188 3.54673 9.91341 3.37862L10.6795 1.53116C11.2486 1.76715 11.7798 2.07605 12.2615 2.4462ZM8.91426 1.05917L8.65557 3.04237C8.4419 3.01449 8.22314 3 8 3C7.77686 3 7.5581 3.01449 7.34443 3.04237L7.08574 1.05917C7.38496 1.02013 7.69013 1 8 1C8.30987 1 8.61504 1.02013 8.91426 1.05917ZM5.32049 1.53116L6.08659 3.37862C5.68119 3.54673 5.30185 3.76716 4.95716 4.03204L3.73851 2.4462C4.22019 2.07605 4.7514 1.76715 5.32049 1.53116ZM2.4462 3.73851L4.03204 4.95716C3.76716 5.30185 3.54673 5.68119 3.37862 6.08659L1.53116 5.32049C1.76715 4.7514 2.07605 4.22019 2.4462 3.73851ZM1.05917 7.08574C1.02013 7.38496 1 7.69013 1 8C1 8.30987 1.02013 8.61504 1.05917 8.91426L3.04237 8.65557C3.01449 8.4419 3 8.22314 3 8C3 7.77686 3.01449 7.5581 3.04237 7.34443L1.05917 7.08574ZM1.53116 10.6795L3.37862 9.91341C3.54673 10.3188 3.76716 10.6981 4.03204 11.0428L2.4462 12.2615C2.07605 11.7798 1.76715 11.2486 1.53116 10.6795ZM3.73851 13.5538L4.95716 11.968C5.30185 12.2328 5.68119 12.4533 6.08659 12.6214L5.32049 14.4688C4.7514 14.2328 4.22019 13.9239 3.73851 13.5538ZM7.08574 14.9408L7.34443 12.9576C7.5581 12.9855 7.77686 13 8 13C8.22314 13 8.4419 12.9855 8.65557 12.9576L8.91427 14.9408C8.61504 14.9799 8.30987 15 8 15C7.69013 15 7.38496 14.9799 7.08574 14.9408ZM10.6795 14.4688L9.91341 12.6214C10.3188 12.4533 10.6981 12.2328 11.0428 11.968L12.2615 13.5538C11.7798 13.9239 11.2486 14.2328 10.6795 14.4688ZM13.5538 12.2615L11.968 11.0428C12.2328 10.6981 12.4533 10.3188 12.6214 9.91341L14.4688 10.6795C14.2328 11.2486 13.924 11.7798 13.5538 12.2615Z"
      ></path>
    </svg>
  );
};

const HeroImage = () => {
  const variables =
    "[--bg-1:#0f1011] [--bg-2:#141516] [--icon-color:#9c9da1] [--left:min(150px,-22rem)]";

  const perspective =
    "perspective-[2000px] md:perspective-[4000px] perspective-origin-top-right";
  const transform =
    "translate-x-0 scale-[0.8] -translate-y-12 rotate-x-41 rotate-y-34 rotate-329 md:translate-x-[15%] md:scale-[1] md:rotate-x-47 md:rotate-y-31 md:rotate-324 lg:translate-x-[-2%] lg:scale-[1.1]";
  const cardTransform = "translate-z-0 translate-x-0";

  return (
    <div
      className={`_Hero-ImgContainer ${variables} relative right-[50%] left-[50%] -mr-[50vw] -ml-[50vw] w-screen translate-z-0`}
    >
      <div
        aria-hidden="true"
        className={`_Hero-ImgWrapper ${perspective} relative flex h-[450px] w-full transform-3d md:h-[650px] md:justify-center md:pt-8`}
      >
        <div
          className={`_Hero-Img ${transform} pointer-events-none relative h-[694px] w-[904px] origin-top-right rounded-lg border bg-(--bg-1) backface-hidden max-sm:left-[calc(var(--left)*0.5)] md:h-[696px]`}
        >
          <div
            className={`_Hero-MainCard ${cardTransform} relative h-[969px] w-[904px]`}
          >
            <Background>
              <Background.Layer className="_bottom-fade absolute -inset-px bg-linear-to-b from-transparent from-20% to-[#08090a] to-50%" />
              <Background.Layer className="_right-fade absolute -inset-px bg-linear-to-r from-transparent from-20% to-[#08090a] to-70%" />
            </Background>
            <div className="_Hero-Header flex justify-between border-b p-4 px-5">
              <div className="_left-side flex items-center gap-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mt-0.5"
                >
                  <path
                    d="M7 14C10.866 14 14 10.866 14 7C14 3.13403 10.866 0 7 0C3.134 0 0 3.13403 0 7C0 10.866 3.134 14 7 14ZM8.0126 9.50781V7.98224H5.9874V9.50787C5.9874 9.92908 5.4767 10.1549 5.14897 9.8786L2.17419 7.37073C1.94194 7.17493 1.94194 6.82513 2.17419 6.62933L5.14897 4.12146C5.4767 3.84515 5.9874 4.07098 5.9874 4.49219V6.01764H8.0126V4.49213C8.0126 4.07092 8.5233 3.84509 8.85103 4.1214L11.8258 6.62927C12.0581 6.82507 12.0581 7.17487 11.8258 7.37067L8.85103 9.87854C8.5233 10.1548 8.0126 9.92902 8.0126 9.50781Z"
                    fill="#fc7840"
                  />
                </svg>
                <div className="flex items-center gap-1">
                  <span>Engineering</span>
                  <ChevronRight size={15} className="opacity-40" />
                  <span>Triage</span>
                </div>
              </div>
              <div className="_right-side flex items-center gap-3">
                <p>Subscribe</p>
                <div className="_avatars flex items-center">
                  <div className="size-8 rounded-full bg-linear-to-br from-gray-300 to-blue-300" />
                  <div className="-ml-3 size-8 rounded-full bg-linear-to-br from-gray-300 to-yellow-300" />
                  <div className="-ml-3 size-8 rounded-full bg-linear-to-br from-gray-300 to-pink-300" />
                </div>
              </div>
            </div>
            <div className="_Hero-Hero space-y-10 p-6">
              <h3 className="">App freezes on splash screen.</h3>
              <div className="card h-[12rem] w-full resize-none rounded-md border bg-(--bg-2)" />
              <span className="">
                After launch, the splash screen remains visible indefinitely
                with no change in state.
                <br />
                The app does not progress to the primary dashboard or menus.
              </span>
            </div>
          </div>

          <div
            className={`_Hero-HoverCard ${cardTransform} absolute top-[6.5rem] w-[900px] scale-[0.9] overflow-hidden rounded-md bg-[#262a3180] p-8 [box-shadow:0_2px_32px_0_rgba(8,9,10,.6),0_1px_1px_0_rgba(0,0,0,.12)] backdrop-blur-[10px]`}
          >
            <Background>
              <Background.Layer className="_right-fade absolute -inset-[5px] bg-linear-to-r from-transparent from-20% to-[#08090a] to-70%" />
            </Background>
            <div className="_header mb-6 flex gap-2">
              <svg
                className=""
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#9c9da1"
                role="img"
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.00098 11C8.41519 11 8.75098 11.3358 8.75098 11.75V14.25C8.75098 14.6642 8.41519 15 8.00098 15C7.58676 15 7.25098 14.6642 7.25098 14.25V11.75C7.25098 11.3358 7.58676 11 8.00098 11Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.2207 2.21973C2.5136 1.92683 2.98836 1.92683 3.28125 2.21973L8.53125 7.46973C8.82403 7.76263 8.82411 8.23742 8.53125 8.53027L3.28125 13.7803C2.98839 14.0731 2.51359 14.073 2.2207 13.7803C1.92783 13.4874 1.92787 13.0126 2.2207 12.7197L5.33691 9.60352C5.65187 9.28855 5.4288 8.75006 4.9834 8.75H1.75098C1.3368 8.75 1.00104 8.41416 1.00098 8C1.00098 7.58579 1.33676 7.25 1.75098 7.25H4.9834C5.42877 7.24994 5.65178 6.71146 5.33691 6.39648L2.2207 3.28027C1.92783 2.9874 1.92787 2.51262 2.2207 2.21973Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.9707 9.96973C10.2636 9.67683 10.7384 9.67683 11.0312 9.96973L13.7812 12.7197C14.0741 13.0126 14.0741 13.4874 13.7812 13.7803C13.4884 14.0731 13.0136 14.0731 12.7207 13.7803L9.9707 11.0303C9.67783 10.7374 9.67787 10.2626 9.9707 9.96973Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.251 7.25C14.6652 7.25 15.001 7.58579 15.001 8C15.001 8.41421 14.6652 8.75 14.251 8.75H11.751C11.3368 8.75 11.001 8.41421 11.001 8C11.001 7.58579 11.3368 7.25 11.751 7.25H14.251Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.7207 2.21973C13.0136 1.92683 13.4884 1.92683 13.7812 2.21973C14.0741 2.51262 14.0741 2.98738 13.7812 3.28027L11.0312 6.03027C10.7384 6.32311 10.2636 6.32315 9.9707 6.03027C9.67783 5.7374 9.67787 5.26262 9.9707 4.96973L12.7207 2.21973Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.00098 1C8.41519 1 8.75098 1.33579 8.75098 1.75V4.25C8.75098 4.66421 8.41519 5 8.00098 5C7.58676 5 7.25098 4.66421 7.25098 4.25V1.75C7.25098 1.33579 7.58676 1 8.00098 1Z"
                ></path>
              </svg>
              <span>Product Intelligence</span>
            </div>
            <div className="_suggestions-row my-2 flex items-center gap-4">
              <p className="text-muted-foreground w-[6.5rem]">Suggestions</p>
              <div className="_btns flex items-center gap-3">
                <button className="flex items-center gap-1 rounded-sm border border-dashed p-0.5 px-1">
                  <div className="size-4.5 rounded-full bg-linear-to-br from-gray-300 to-blue-300" />
                  <span>nan</span>
                </button>
                <button className="flex items-center gap-1 rounded-sm border border-dashed p-0.5 px-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#5e6ad2"
                    role="img"
                    focusable="false"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 2.5H10.5C11.0523 2.5 11.5 2.94772 11.5 3.5V12.5C11.5 13.0523 11.0523 13.5 10.5 13.5H5.5C4.94772 13.5 4.5 13.0523 4.5 12.5V3.5C4.5 2.94772 4.94772 2.5 5.5 2.5H6V3C6 3.55228 6.44772 4 7 4H9C9.55228 4 10 3.55228 10 3V2.5ZM3 3.5C3 2.11929 4.11929 1 5.5 1H10.5C11.8807 1 13 2.11929 13 3.5V12.5C13 13.8807 11.8807 15 10.5 15H5.5C4.11929 15 3 13.8807 3 12.5V3.5Z"
                    ></path>
                  </svg>
                  <span>Mobile App Refactor</span>
                </button>
                <button className="flex items-center gap-1 rounded-sm border border-dashed p-0.5 px-1">
                  <div className="size-3 rounded-full bg-[#b7534a]" />
                  <span>Slack</span>
                </button>
              </div>
            </div>
            <div className="_duplicates-row my-2 flex items-center gap-4">
              <p className="text-muted-foreground min-w-[6.5rem]">
                Duplicate of
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <LoadingIcon />{" "}
                  <span className="font-GeistMono text-muted-foreground">
                    ENG-1419
                  </span>
                </div>
                <p>Loading spinner keeps running on startup</p>
              </div>
            </div>
            <div className="_relations-row my-2 flex items-center gap-4">
              <p className="text-muted-foreground min-w-[6.5rem]">Related to</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <LoadingIcon />{" "}
                  <span className="font-GeistMono text-muted-foreground">
                    ENG-1419
                  </span>
                </div>
                <p>Mobile app takes a long time to open</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
