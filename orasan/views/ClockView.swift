//
//  ClockView.swift
//  orasan
//
//  Created by dc on 3/6/22.
//

import SwiftUI

struct ClockView: View {
    @State var currentTime = Date()
    let timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()
    
    var body: some View {
        GeometryReader { geo in
            let time = formatter.string(from: currentTime).components(separatedBy: ":")
            
            HStack {
                Text("\(time[0]):\(time[1])")
                    .foregroundColor(Color.green)
                    .font(.system(size: geo.size.width * 0.2))
                    .minimumScaleFactor(0.05)
                    .lineLimit(1)
                    .onReceive(timer) { input in
                        currentTime = input
                    }
                Text("\(time[2])")
                    .baselineOffset(geo.size.width * 0.1)
                    .foregroundColor(Color.green)
                    .font(.system(size: geo.size.width * 0.1))
                    .minimumScaleFactor(0.05)
                    .lineLimit(1)
                    .onReceive(timer) { input in
                        currentTime = input
                    }
            }
            .frame(maxHeight: .infinity)
            .padding(.leading, geo.size.width * 0.2)
        }
    }
}

struct ClockView_Previews: PreviewProvider {
    static var previews: some View {
        ClockView()
    }
}

private var formatter: DateFormatter = {
    let formatter = DateFormatter()
    formatter.dateFormat = "hh:mm:ss"
    return formatter
}()
