/**
 * Describes a single directory item (directory, file etc.).
 */
interface IDirectoryItem {

    /**
     * The full path to this directory item.
     */
    path: string;

    /**
     * The display name of the directory item.
     */
    name: string;

    /**
     * Whether the directory item is a directory.
     */
    isDirectory: boolean;

    /**
     * Whether the directory item is hidden.
     */
    isHidden: boolean;
}

export default IDirectoryItem;
