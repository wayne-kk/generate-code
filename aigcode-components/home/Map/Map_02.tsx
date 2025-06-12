import React from "react";
import EditableIcon from '@ui/EditableIcon';
import EditableText from '@ui/EditableText';
import AnimateInView from "@/_components/@ui/AnimateInView";

interface MapProps {
  locationName?: string;
  title?: string;
  description?: string;
  locationIcon?: string;
}

const MAP_IFRAME_STYLE = {
  filter: 'grayscale(1) contrast(1.1)',
  opacity: 0.6,
} as const;

const getMapUrl = (encodedLocation: string) =>
  `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodedLocation}&ie=UTF8&t=&z=14&iwloc=B&output=embed`;

const Map: React.FC<MapProps> = ({
  locationName = "New York Studio",
  title = "Explore Our Creative Space",
  description = "Venture into the heart of our design studio located in New York and discover where innovative ideas take shape.",
  locationIcon = "fa-solid fa-location-dot"
}) => {
  const encodedLocation = encodeURIComponent(locationName);

  return (
    <div className="w-full bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center p-6 rounded-lg">
            <h1 className="TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white mb-4">
              <EditableText propKey="title">{title}</EditableText>
            </h1>
            <p className="DESC text-base font-normal text-slate-700 dark:text-white/70 mb-4">
              <EditableText propKey="description">{description}</EditableText>
            </p>
            <div className="flex items-center text-sky-600 dark:text-sky-200">
              <EditableIcon
                propKey="locationIcon"
                icon={locationIcon}
                iconLibrary="FontAwesome"
                className="text-lg text-sky-600 dark:text-sky-200 mr-2"
              />
              <EditableText propKey="locationName">{locationName}</EditableText>
            </div>
          </div>
          <AnimateInView type="rise">
            <div className="relative overflow-hidden rounded-2xl h-80 shadow">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={getMapUrl(encodedLocation)}
                style={MAP_IFRAME_STYLE}
                allowFullScreen={true}
                loading="lazy"
                title={locationName}
              />
            </div>
          </AnimateInView>
        </div>
      </div>
    </div>
  );
}

export default Map;