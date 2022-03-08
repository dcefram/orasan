//
//  ControlView.swift
//  orasan
//
//  Created by dc on 3/6/22.
//

import SwiftUI

struct ControlView: View {
    @State private var countDownRunning = false
    var body: some View {
        VStack {
            Button("\(countDownRunning ? "Stop" : "Start") Timer") {
                countDownRunning.toggle()
            }
        }
    }
}

struct ControlView_Previews: PreviewProvider {
    static var previews: some View {
        ControlView()
    }
}
