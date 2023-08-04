/**
 * @typedef {import("@prismicio/client").Content.SolarSystemSlice} SolarSystemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SolarSystemSlice>} SolarSystemProps
 * @param {SolarSystemProps}
 */
const SolarSystem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for solar_system (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SolarSystem;
