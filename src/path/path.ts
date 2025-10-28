

function getPathExtension(path: string): string {
    const lastDotIndex = path.lastIndexOf(".");
    if (lastDotIndex === -1 || lastDotIndex === path.length - 1) {
        return "";
    }
    return path.substring(lastDotIndex + 1);
}
