//
//  orasanApp.swift
//  orasan
//
//  Created by dc on 3/6/22.
//

import SwiftUI

class AppDelegate: NSObject, NSApplicationDelegate {
    var statusBar: StatusBarController?
    var popover = NSPopover.init()
    
    func applicationDidFinishLaunching(_ aNotification: Notification) {
        let controlView = ControlView()
        
        // Set the SwiftUI's ContentView to the Popover's ContentViewController
        popover.contentViewController = MainViewController()
        popover.contentSize = NSSize(width: 360, height: 360)
        popover.contentViewController?.view = NSHostingView(rootView: controlView)
        
        // Create the Status Bar Item with the Popover
        statusBar = StatusBarController.init(popover)
    }
}

@main
struct orasanApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
