import AppKit

class StatusBarController {
    private var statusItem: NSStatusItem!
    private var popover: NSPopover
    
    init(_ popover: NSPopover) {
        self.popover = popover;
        statusItem = {
            let item = NSStatusBar.system.statusItem(withLength:NSStatusItem.squareLength)
            
            if let button = item.button {
                button.image = NSImage(named: "clock-24")
                button.target = self
                button.action = #selector(togglePopover(sender:))
            }
            
            return item
        }()
    }
    
    @objc func togglePopover(sender: AnyObject) {
        if(popover.isShown) {
            hidePopover(sender)
        }
        else {
            showPopover(sender)
        }
    }
    
    func showPopover(_ sender: AnyObject) {
        if let statusBarButton = statusItem.button {
            popover.show(relativeTo: statusBarButton.bounds, of: statusBarButton, preferredEdge: NSRectEdge.maxY)
        }
    }
    
    func hidePopover(_ sender: AnyObject) {
        popover.performClose(sender)
    }
}
