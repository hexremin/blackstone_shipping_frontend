import { useTheme, useMediaQuery } from "@mui/material";

/**
 @param queryType 
 * @param startKey 
 * @param endKey
 */
export function useResponsive(
    queryType: "up" | "down" | "between",
    startKey: "xs" | "sm" | "md" | "lg" | "xl",
    endKey?: "xs" | "sm" | "md" | "lg" | "xl"
): boolean {
    const theme = useTheme();

    const query =
        queryType === "up"
            ? theme.breakpoints.up(startKey)
            : queryType === "down"
                ? theme.breakpoints.down(startKey)
                : theme.breakpoints.between(startKey, endKey || "md");

    return useMediaQuery(query);
}
