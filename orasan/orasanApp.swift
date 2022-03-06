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
