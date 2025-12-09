/* bevel-[] utility
* NOTE: use TWCSS v^4
*   adds a bevel-like styling to elements using inset shadows
*
*  USAGE: 
        <any-number> whole or decimals

        bevel-[<any-number>]; 
        bevel-[<any-number1>_<any-number2>]; 

        Example: bevel-[0.5], 
                bevel-[0.5_0.3] // the first value is thw white-alpha and
                the last is the black-alpha
*
*/

export default function bevelPlugin({matchUtilities}){
    matchUtilities({
        bevel:(value) => {
            // explicity replace spaces with underscores if needed 
            let normalized = value.replace(/ /g, "_")
            let values = normalized.split("_");

            // single value -> both alphas, if only one value is given ise it for both
            let alphaWhite = values[0];
            let alphaBlack = values[1] ?? values[0];

            return {
                "--alpha-white": alphaWhite,
                "--alpha-black": alphaBlack,
                "box-shadow":`
                    inset 0px 1px 0.75px rgba(255, 255, 255, var(--alpha-white)),
                    inset 0px -2px 0.75px rgba(0, 0, 0, var(--alpha-black));
                `,
            }
        },
    },
    {type: "any"}
)
}