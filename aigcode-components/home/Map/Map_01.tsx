import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';

interface MapProps {
  locationName?: string;
  title?: string;
  description?: string;
  locationIcon?: string;
}

const MAP_IFRAME_STYLE = {
  filter: "grayscale(1) contrast(1.2)",
  opacity: 0.4
} as const;

const getMapUrl = (encodedLocation: string) => 
  `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodedLocation}&ie=UTF8&t=&z=14&iwloc=B&output=embed`;

const Map: React.FC<MapProps> = ({
  locationName = "New York",
  title = "Design Studio Location",
  description = "Explore our workspace through the interactive map below and get a feel for the creative environment where we bring innovative designs to life.",
  locationIcon = "fa-solid fa-location-dot"
}) => {
  const encodedLocation = encodeURIComponent(locationName);
  const mapLocation = getMapUrl(encodedLocation);

  return (
    <div className="relative w-full">
      <div className="max-w-7xl mx-auto py-28 px-4 ">
        <div className="absolute inset-0 w-full h-200">
          <iframe
            className="w-full h-full"
            src={mapLocation}
            style={MAP_IFRAME_STYLE}
            allowFullScreen={true}
            loading="lazy"
            title={`Map of ${locationName}`}
            scrolling="no"
          ></iframe>
        </div>
        <div className="w-fit md:w-1/2 gap-8 bg-white/70 dark:bg-black/70 shadow backdrop-blur rounded-2xl py-10 px-10">
          <h1 className="TITLE-PRIMARY text-3xl font-semibold text-slate-900 dark:text-white mb-4">
            <EditableText propKey={"title"}>{title}</EditableText>
          </h1>
          <p className="DESC text-base font-normal text-slate-700 dark:text-white/70 mb-4">
            <EditableText propKey={"description"}>{description}</EditableText>
          </p>
          <p className="flex items-center text-sky-600">
            <EditableIcon 
              propKey={"locationIcon"} 
              icon={locationIcon} 
              iconLibrary={"FontAwesome"} 
              className="TEXT-LINK text-base text-sky-600 mr-2"
            />
            <EditableText propKey={"locationName"}>{locationName}</EditableText>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Map;