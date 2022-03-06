import AppKit

class StatusBarController {
//    private var statusBar: NSStatusBar
//    private var statusItem: NSStatusItem!
    private var popover: NSPopover
    
    init(_ popover: NSPopover) {
        self.popover = popover;
        let statusItem: NSStatusItem = {
            let item = NSStatusBar.system.statusItem(withLength:NSStatusItem.squareLength)
            
            if let button = item.button {
                button.image = NSImage(named: "clock-24")
                button.target = self
    //            button.action = #selector(launchFromTray)
            }
            
            return item
        }()
        
    }
}
