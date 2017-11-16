/**
 * Describes the internal state of the DirectoryPane.
 */
interface IDirectoryPaneState {

    /**
     * The path to the directory the pane displays.
     */
    path: string;

    /**
     * The index of the currently selected item.
     */
    selectedItem: number;
}

export default IDirectoryPaneState;
