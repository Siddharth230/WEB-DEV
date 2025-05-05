import { ShareIcon } from "../icons/ShareIcon";

export function Card() {
  return (
    <>
      <div className="p-5 bg-white rounded-md  border-gray-200 max-w-72 border">
        <div className="flex justify-between ">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcon size="md" />
            </div>
            Project Ideas
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <ShareIcon size="md" />
            </div>
            <div className="text-gray-500">
              <ShareIcon size="md" />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {/* <iframe
            className="w-full"
            src="https://www.youtube.com/embed/pXJ2qoGU88g?si=phJShIS1u69x0QGk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe> */}
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/akash_wt/status/1919091401104449560?ref_src=twsrc%5Etfw"></a>
          </blockquote>
        </div>
      </div>
    </>
  );
}
